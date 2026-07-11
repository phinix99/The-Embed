export default function Footer() {
  return (
    <footer className="border-t border-line py-10 bg-paper">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-sans text-xs tracking-[0.08em] text-muted uppercase font-medium">
          The Embed - Ishita Shah, India
        </span>
        <div className="flex gap-6 font-sans text-xs tracking-[0.08em] text-muted uppercase font-medium">
          <a href="https://www.linkedin.com/in/ishita-shah-581b56b/" target="_blank" rel="noopener noreferrer" className="hover:text-ink border-b border-tan/30 hover:border-tan transition-colors pb-1">LinkedIn</a>
          <a href="mailto:the.embed.work@gmail.com" className="hover:text-ink border-b border-tan/30 hover:border-tan transition-colors pb-1">Email</a>
        </div>
      </div>
    </footer>
  );
}
