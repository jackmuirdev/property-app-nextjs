import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse | Find the best property for you',
  description: 'Find the best property for you',
  keywords: 'property, real estate, buy, sell, rent',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default MainLayout;