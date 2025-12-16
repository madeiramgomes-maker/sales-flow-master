export function ConnectorLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main vertical line from leader */}
      <div className="hidden lg:block absolute left-1/2 top-[280px] w-0.5 h-16 bg-gradient-to-b from-leader/40 to-border -translate-x-1/2" />
      
      {/* Horizontal connector */}
      <div className="hidden lg:block absolute left-1/4 right-1/4 top-[344px] h-0.5 bg-border" />
      
      {/* Left vertical line to SDR */}
      <div className="hidden lg:block absolute left-1/4 top-[344px] w-0.5 h-8 bg-gradient-to-b from-border to-sdr/40" />
      
      {/* Right vertical line to CS */}
      <div className="hidden lg:block absolute right-1/4 top-[344px] w-0.5 h-8 bg-gradient-to-b from-border to-cs/40" />
    </div>
  );
}
