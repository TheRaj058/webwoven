import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReferralEmailRequest {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  referredName: string;
  referredEmail: string;
  referredPhone: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      referrerName,
      referrerEmail,
      referrerPhone,
      referredName,
      referredEmail,
      referredPhone,
    }: ReferralEmailRequest = await req.json();

    // Validate required fields
    if (!referrerName || !referrerEmail || !referredName || !referredEmail) {
      throw new Error("Required fields are missing");
    }

    // Send referral notification to business
    const emailResponse = await resend.emails.send({
      from: "Web Woven Referrals <onboarding@resend.dev>",
      to: ["bableerajaryal2@gmail.com"],
      replyTo: referrerEmail,
      subject: `New Referral Submission - ${referredName}`,
      html: `
        <h2>🎉 New Referral Submission</h2>
        
        <h3>Referrer Details:</h3>
        <p><strong>Name:</strong> ${referrerName}</p>
        <p><strong>Email:</strong> ${referrerEmail}</p>
        <p><strong>Phone:</strong> ${referrerPhone || 'Not provided'}</p>
        
        <hr>
        
        <h3>Referred Business/Person:</h3>
        <p><strong>Name:</strong> ${referredName}</p>
        <p><strong>Email:</strong> ${referredEmail}</p>
        <p><strong>Phone:</strong> ${referredPhone || 'Not provided'}</p>
        
        <hr>
        
        <p style="color: #666; font-size: 12px;">
          <strong>Program:</strong> Web Development Referral Program - 10% Commission<br>
          <strong>Action Required:</strong> Contact the referred business and mention the referrer if they proceed with a project.
        </p>
      `,
    });

    console.log("Referral email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-referral-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
