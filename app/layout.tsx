export const metadata = {
  title: 'ICT Practice Platform',
  description: 'Royal ICT Revision and Examination Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#121212' }}>
        {children}
      </body>
    </html>
  )
}