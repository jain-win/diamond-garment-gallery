
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// Sample form submission type
interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  date: string;
}

// Mock data - in a real app this would come from your database
const mockSubmissions: FormSubmission[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '9876543210',
    product: 'School Uniforms',
    message: 'I need to inquire about bulk ordering school uniforms for our institution.',
    status: 'new',
    date: '2025-05-10T08:30:00Z'
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    email: 'maria@example.com',
    phone: '8765432109',
    product: 'Hospital Wear',
    message: 'Looking for information on customized hospital uniforms.',
    status: 'read',
    date: '2025-05-09T14:45:00Z'
  },
  {
    id: '3',
    name: 'David Chen',
    email: 'david@example.com',
    phone: '7654321098',
    product: 'Sports Uniforms',
    message: 'Could you provide samples of your sports uniform fabrics?',
    status: 'responded',
    date: '2025-05-08T11:20:00Z'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '6543210987',
    product: 'Hotel Uniforms',
    message: 'We are renovating our hotel and need new staff uniforms.',
    status: 'new',
    date: '2025-05-07T16:10:00Z'
  },
  {
    id: '5',
    name: 'Michael Brown',
    email: 'michael@example.com',
    phone: '5432109876',
    product: 'Industrial Uniforms',
    message: 'Need information about fire-resistant industrial uniforms.',
    status: 'read',
    date: '2025-05-06T09:15:00Z'
  }
];

const FormSubmissionsPanel = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>(mockSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleStatusChange = (id: string, newStatus: 'new' | 'read' | 'responded') => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    ));
  };
  
  const handleDelete = (id: string) => {
    setSubmissions(submissions.filter(sub => sub.id !== id));
  };
  
  const handleViewDetails = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    
    // Mark as read if it's new
    if (submission.status === 'new') {
      handleStatusChange(submission.id, 'read');
    }
  };
  
  // Just for demo - simulate loading state
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Form Submissions</h2>
        <Button onClick={handleRefresh} variant="outline" disabled={isLoading}>
          {isLoading ? "Refreshing..." : "Refresh"}
        </Button>
      </div>
      
      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 items-center p-4 border rounded-md">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-md shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.length > 0 ? (
                submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">
                      <div>
                        {submission.name}
                        <div className="text-xs text-gray-500">{submission.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{submission.product || 'General Inquiry'}</TableCell>
                    <TableCell className="hidden md:table-cell">{formatDate(submission.date)}</TableCell>
                    <TableCell>
                      <Badge variant={
                        submission.status === 'new' ? 'default' :
                        submission.status === 'read' ? 'secondary' :
                        'outline'
                      }>
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleViewDetails(submission)}
                        >
                          View
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(submission.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    No submissions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Detail Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Status:</div>
                <div className="col-span-2">
                  <select 
                    className="px-2 py-1 border rounded-md w-full"
                    value={selectedSubmission.status}
                    onChange={(e) => handleStatusChange(
                      selectedSubmission.id, 
                      e.target.value as 'new' | 'read' | 'responded'
                    )}
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="responded">Responded</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Name:</div>
                <div className="col-span-2">{selectedSubmission.name}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Email:</div>
                <div className="col-span-2">
                  <a href={`mailto:${selectedSubmission.email}`} className="text-blue-600 hover:underline">
                    {selectedSubmission.email}
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Phone:</div>
                <div className="col-span-2">
                  <a href={`tel:${selectedSubmission.phone}`} className="text-blue-600 hover:underline">
                    {selectedSubmission.phone}
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Product:</div>
                <div className="col-span-2">{selectedSubmission.product || 'N/A'}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Date:</div>
                <div className="col-span-2">{formatDate(selectedSubmission.date)}</div>
              </div>
              
              <div className="space-y-2">
                <div className="font-medium">Message:</div>
                <div className="p-3 bg-gray-50 rounded-md">
                  {selectedSubmission.message}
                </div>
              </div>
              
              <div className="flex justify-between gap-4 pt-2">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedSubmission(null)}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => {
                    handleStatusChange(selectedSubmission.id, 'responded');
                    // In a real app, this would open an email client
                    window.location.href = `mailto:${selectedSubmission.email}?subject=Re: Your Inquiry&body=Dear ${selectedSubmission.name},%0D%0A%0D%0AThank you for your inquiry about "${selectedSubmission.product}".%0D%0A%0D%0A`;
                  }}
                >
                  Reply via Email
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormSubmissionsPanel;
