import { FaGithub, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Socials() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={40} />
      </a>

      <a
        href="https://leetcode.com/u/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode size={40} />
      </a>

      <a href="mailto:your@email.com">
        <MdEmail size={40} />
      </a>

      <a
        href="https://discord.com/users/YOUR_ID"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord size={40} />
      </a>
    </div>
  );
}