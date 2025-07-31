export const metadata = {
  title: 'Surgical Strides',
  description: 'Training. Nutrition. Recovery.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}