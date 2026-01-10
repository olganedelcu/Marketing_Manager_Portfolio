"use client";

import Image from "next/image";

export function TechStack() {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        {/* CRM & Automation */}
        <div className="tech-column">
          <h3 className="tech-heading">
            <span className="tech-emoji">🔧</span> CRM & Automation
          </h3>
          <div className="logo-grid crm-grid">
            <Image src="/assets/logos/hubspot.webp" alt="HubSpot" width={52} height={52} className="logo-icon" />
            <Image src="/assets/logos/salesforce.webp" alt="Salesforce" width={52} height={52} className="logo-icon" />
            <Image src="/assets/logos/SalesLove.webp" alt="Apollo" width={52} height={52} className="logo-icon" />
            <Image src="/assets/logos/zapier.webp" alt="Zapier" width={170} height={52} className="logo-wordmark zapier" />
            <Image src="/assets/logos/GMass.webp" alt="GMass" width={170} height={52} className="logo-wordmark gmass" />
          </div>
        </div>

        {/* Marketing & Campaign Tools */}
        <div className="tech-column">
          <h3 className="tech-heading">
            <span className="tech-emoji">📣</span> Marketing & Campaign Tools
          </h3>
          <div className="logo-grid marketing-grid">
            <Image src="/assets/logos/chimp.webp" alt="Mailchimp" width={52} height={52} className="logo-icon" />
            <Image src="/assets/logos/hootsuite.webp" alt="Hootsuite" width={170} height={52} className="logo-wordmark hootsuite" />
            <Image src="/assets/logos/luma.webp" alt="Luma" width={170} height={52} className="logo-wordmark luma" />
            <Image src="/assets/logos/meta.webp" alt="Meta Ads" width={170} height={52} className="logo-wordmark meta" />
            <Image src="/assets/logos/Brevo.webp" alt="Brevo" width={52} height={52} className="logo-icon brevo" />
          </div>
        </div>

        {/* Content & Design */}
        <div className="tech-column">
          <h3 className="tech-heading">
            <span className="tech-emoji">✍️</span> Content & Design
          </h3>
          <div className="logo-grid content-grid">
            <Image src="/assets/logos/canva.webp" alt="Canva" width={52} height={52} className="logo-icon" />
            <Image src="/assets/logos/miro.webp" alt="Miro" width={170} height={52} className="logo-wordmark miro" />
            <Image src="/assets/logos/notion.webp" alt="Notion" width={52} height={52} className="logo-icon" />
            <Image src="/assets/logos/Gsuite.webp" alt="Google Workspace" width={170} height={52} className="logo-wordmark gsuite" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-stack-section {
          width: 100%;
          background-color: #ECECE8;
          padding: 32px 40px;
        }

        .tech-stack-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 64px;
          max-width: 100%;
        }

        .tech-column {
          display: flex;
          flex-direction: column;
        }

        .tech-heading {
          font-weight: 800;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 22px;
          color: #2B2B2B;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tech-emoji {
          font-size: 24px;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(4, max-content);
          grid-auto-rows: auto;
          column-gap: 28px;
          row-gap: 22px;
          align-items: center;
        }

        .logo-grid :global(img) {
          max-height: 52px;
          width: auto;
          height: auto;
          object-fit: contain;
          image-rendering: auto;
        }

        .logo-grid :global(.logo-icon) {
          height: 52px;
          width: 52px;
        }

        .logo-grid :global(.logo-wordmark) {
          max-width: 170px;
          height: auto;
        }

        .crm-grid :global(.zapier) {
          grid-column: span 2;
        }
        .crm-grid :global(.gmass) {
          grid-column: span 2;
        }

        .marketing-grid :global(.hootsuite) {
          grid-column: span 2;
        }
        .marketing-grid :global(.meta) {
          grid-column: span 2;
        }

        .content-grid :global(.miro) {
          grid-column: span 2;
        }
        .content-grid :global(.gsuite) {
          grid-column: 1 / -1;
        }

        @media (max-width: 900px) {
          .tech-stack-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
