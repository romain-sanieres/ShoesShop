"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getUser } from "@/actions/user";

export default function Company() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      return null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  if (isLoading) return <></>;
  if (isError) return <></>;

  return (
    <section>
      <p className="text-2xl font-semibold">New Company</p>
      <p className="text-muted-foreground">
        You must first create a company to start selling your products.
      </p>
      <div className="grid gap-4 mt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name *</Label>
            <Input id="company-name" placeholder="Enter company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stripe">Stripe Account *</Label>
            <Input id="stripe" placeholder="Enter your Stripe " />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Company Description *</Label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Describe your company's products or services"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Button>Create New Company</Button>
        </div>
      </div>
    </section>
  );
}
