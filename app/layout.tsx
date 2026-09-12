export const metadata = {
  title: "Moumita Haque Mohona",
  description: "AI Researcher Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

return (

<html lang="en">

<body>

{children}

</body>

</html>

);

}