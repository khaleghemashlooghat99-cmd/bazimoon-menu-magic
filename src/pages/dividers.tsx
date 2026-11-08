type DividersProps = { icon: string; name: string };

const Dividers = ({ icon, name }: DividersProps) => (
	<div className="menu-divider-badge w-full" dir="rtl">
		<span className="menu-divider-line min-w-0 bg-gradient-to-l from-transparent to-primary/80" aria-hidden="true" />
		<span className="menu-divider-badge-gem" aria-hidden="true" />
		<span className="menu-divider-badge-circle" aria-hidden="true"><img src={icon} alt="" className="h-5 w-5 object-contain" /></span>
		<span className="shrink-0 text-sm font-bold text-foreground sm:text-base">{name}</span>
		<span className="menu-divider-badge-gem" aria-hidden="true" />
		<span className="menu-divider-line min-w-0 bg-gradient-to-l from-primary/80 to-transparent" aria-hidden="true" />
	</div>
);

export default Dividers;
