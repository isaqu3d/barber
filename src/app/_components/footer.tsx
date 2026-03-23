export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card mt-12 flex items-center justify-center px-5 py-6">
      <p className="text-muted-foreground text-xs">
        © {currentYear} Copyright{" "}
        <strong className="text-muted-foreground">FSW Barber</strong>
      </p>
    </footer>
  )
}
