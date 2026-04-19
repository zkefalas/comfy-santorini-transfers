import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.comfysantorinitransfers.com' // Το domain σου

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/transfers`, lastModified: new Date() },
    { url: `${baseUrl}/attractions`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ]
}