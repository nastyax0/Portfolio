// components/EmailTemplate.tsx
import { Html, Text } from "@react-email/components";

export default function EmailTemplate({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <Html>
      <Text>New booking inquiry:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </Html>
  );
}
