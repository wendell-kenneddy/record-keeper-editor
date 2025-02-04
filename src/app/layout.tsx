import {
  ColorSchemeScript,
  Container,
  MantineProvider,
  Space,
  mantineHtmlProps,
} from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Header } from "@/components/header";

import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>

      <body>
        <MantineProvider theme={{ primaryColor: "teal" }} defaultColorScheme="dark">
          <DatesProvider settings={{}}>
            <Header />

            <Space h="xl" />

            <Container fluid p={0} maw={1024}>
              {children}
            </Container>

            <Space h="xl" />
          </DatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
