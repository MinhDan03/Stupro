import { Inter } from 'next/font/google';
import "./globals.css";
const inter = Inter({
  subsets: ['latin'], // Hỗ trợ subset cho ngôn ngữ Latin
  weight: ['400', '900'], // Chỉ định các trọng số cần dùng
  display: 'swap',       // Tối ưu hóa hiển thị font chữ
});

export const metadata = {
  title: "STUPRO",
  description: "Developer with four handsome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
