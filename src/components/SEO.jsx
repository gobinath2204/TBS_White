import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Test Base Solutions Ltd.";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteDescription = description || "Advanced testing solutions for automotive and embedded systems.";
    const siteKeywords = keywords || "TBS, Testing, Automotive, Embedded Systems, HIL, SMU, DFU";
    const siteUrl = url || "https://testbasesolutions.com";
    const siteImage = image || "/logo.png";

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />
        </Helmet>
    );
};

export default SEO;
