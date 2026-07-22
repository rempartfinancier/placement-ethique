import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { processLead } from "./leads.server";

const leadSchema = z.object({
  email: z.string().trim().email().max(255),
  name: z.string().trim().max(120).optional().nullable(),
  phone: z.string().trim().max(50).optional().nullable(),
  message: z.string().trim().max(5000).optional().nullable(),
  offer_name: z.string().trim().max(120).optional().nullable(),
  source: z.string().trim().min(1).max(80),
  payload: z.record(z.string(), z.any()).optional().nullable(),
  newsletter_opt_in: z.boolean().optional().default(false),
  send_email: z.boolean().optional().default(false),
  send_admin_notification: z.boolean().optional().default(false),
  result_summary: z.string().max(8000).optional().nullable(),
  download_url: z.string().trim().max(500).optional().nullable(),
  download_label: z.string().trim().max(160).optional().nullable(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const saveLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    return processLead(data);
  });
