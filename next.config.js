/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ih1.redbubble.net'], // Voeg hier je afbeeldingsdomeinen toe
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Gaat voor alle routes gelden
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com; frame-src https://www.youtube.com; img-src 'self' ih1.redbubble.net data:; style-src 'self' 'unsafe-inline';", // Pas aan volgens je behoeften
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
