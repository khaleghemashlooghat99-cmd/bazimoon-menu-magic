import { Pizza } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type DividersProps = { Icon?: LucideIcon };

const Dividers = ({ Icon = Pizza }: DividersProps) => (
	<div className="menu-divider-badge" aria-hidden="true"><span className="menu-divider-line menu-divider-line-start" /><span className="menu-divider-badge-gem" /><span className="menu-divider-badge-circle"><Icon className="h-5 w-5" /></span><span className="menu-divider-badge-gem" /><span className="menu-divider-line menu-divider-line-end" /></div>
);

export default Dividers;
