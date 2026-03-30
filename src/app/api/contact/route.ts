import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, phone, area, services, message } = await req.json()

  const servicesHtml = services
    .map(
      (s: string) => `
      <tr>
        <td style="padding:6px 0;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="width:20px;vertical-align:middle;">
                <div style="width:8px;height:8px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:50%;"></div>
              </td>
              <td style="padding-left:10px;font-size:14px;color:#334155;font-family:'Helvetica Neue',Arial,sans-serif;">${s}</td>
            </tr>
          </table>
        </td>
      </tr>
    `,
    )
    .join('')

  const html = `
<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Νέο Αίτημα Ραντεβού</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4ff;font-family:'Helvetica Neue',Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f4ff;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#2563eb 100%);border-radius:20px 20px 0 0;padding:48px 40px 40px;text-align:center;">
             <!-- Logo mark -->
<table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 24px;">
  <tr>
    <td style="vertical-align:middle;">
      <img src="${process.env.NEXT_PUBLIC_SITE_URL}/images/logo-splash.png" alt="logo" width="60" height="60" style="display:block;" />
    </td>
    <td style="vertical-align:middle;padding-left:4px;">
      <div style="font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-1px;font-family:'Helvetica Neue',Arial,sans-serif;line-height:1;">ΣΠΟΥΔΑΣ</div>
      <div style="font-size:10px;color:#bfdbfe;background:#1d4ed8;text-align:center;padding:3px 6px;letter-spacing:3px;text-transform:uppercase;font-weight:700;margin-top:5px;">ΧΡΩΜΑ &amp; ΔΙΑΚΟΣΜΗΣΗ</div>
    </td>
  </tr>
</table>


              <h1 style="margin:0;font-size:32px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">Αίτημα Ραντεβού</h1>
              <p style="margin:12px 0 0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.6;">Λάβατε ένα νέο αίτημα από έναν ενδιαφερόμενο πελάτη</p>
            </td>
          </tr>

          <!-- White body -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <!-- Info grid -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding-bottom:16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <!-- Name card -->
                        <td width="48%" style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #bfdbfe;border-radius:14px;padding:20px;vertical-align:top;">
                          <div style="font-size:10px;font-weight:700;color:#3b82f6;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Ονοματεπώνυμο</div>
                          <div style="font-size:17px;font-weight:700;color:#1e3a8a;">${name}</div>
                        </td>
                        <td width="4%"></td>
                        <!-- Phone card -->
                        <td width="48%" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #bbf7d0;border-radius:14px;padding:20px;vertical-align:top;">
                          <div style="font-size:10px;font-weight:700;color:#16a34a;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Τηλέφωνο</div>
                          <div style="font-size:17px;font-weight:700;color:#14532d;">${phone}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <!-- Area card full width -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:linear-gradient(135deg,#faf5ff,#ede9fe);border:1px solid #ddd6fe;border-radius:14px;padding:20px;">
                          <div style="font-size:10px;font-weight:700;color:#7c3aed;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Περιοχή</div>
                          <div style="font-size:17px;font-weight:700;color:#3b0764;">${area}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,#e2e8f0,transparent);"></td>
                </tr>
              </table>

              <!-- Services section -->
              <div style="margin-bottom:28px;">
                <div style="font-size:10px;font-weight:700;color:#94a3b8;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;">Ζητούμενες Υπηρεσίες</div>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:20px;">
                  <tr><td style="padding:20px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${servicesHtml}
                    </table>
                  </td></tr>
                </table>
              </div>

              <!-- Message section (conditional) -->
              ${
                message
                  ? `
              <div style="margin-bottom:32px;">
                <div style="font-size:10px;font-weight:700;color:#94a3b8;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;">Μήνυμα Πελάτη</div>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="background:#fffbeb;border:1px solid #fde68a;border-left:4px solid #f59e0b;border-radius:0 14px 14px 0;padding:20px;">
                      <p style="margin:0;font-size:15px;color:#78350f;line-height:1.7;font-style:italic;">"${message}"</p>
                    </td>
                  </tr>
                </table>
              </div>
              `
                  : ''
              }

              <!-- CTA button -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="tel:${phone.replace(/\s/g, '')}"
                      style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:100px;letter-spacing:0.3px;box-shadow:0 8px 24px rgba(37,99,235,0.35);">
                      📞 &nbsp;Καλέστε τώρα τον πελάτη
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f172a,#1e3a8a);border-radius:0 0 20px 20px;padding:28px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);letter-spacing:0.5px;">ΣΠΟΥΔΑΣ — ΧΡΩΜΑ &amp; ΔΙΑΚΟΣΜΗΣΗ</p>
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Αυτό το email στάλθηκε αυτόματα από τη φόρμα επικοινωνίας</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `

  try {
    await resend.emails.send({
      from: 'Ραντεβού <onboarding@resend.dev>', // replace with your verified domain later
      to: [process.env.CONTACT_EMAIL!], // 👈 replace this
      subject: `📋 Νέο Ραντεβού — ${name} (${area})`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
