import { Pizza } from "lucide-react";

const Dividers = () => (
	<>
		<div className="menu-divider menu-divider--tight" aria-hidden="true"><span className="menu-divider-dot" /><span className="menu-divider-line menu-divider-line-start" /><span className="menu-divider-diamond" /><span className="menu-divider-line menu-divider-line-end" /><span className="menu-divider-dot" /></div>
		<div className="menu-divider-badge" aria-hidden="true"><span className="menu-divider-line menu-divider-line-start" /><span className="menu-divider-badge-gem" /><span className="menu-divider-badge-circle"><Pizza className="h-5 w-5" /></span><span className="menu-divider-badge-gem" /><span className="menu-divider-line menu-divider-line-end" /></div>
		<div className="menu-divider-triple" aria-hidden="true"><div className="menu-divider-triple-row"><span className="menu-divider-line menu-divider-line-start" /><span className="menu-divider-triple-gem menu-divider-triple-gem-sm" /><span className="menu-divider-triple-gem" /><span className="menu-divider-triple-gem menu-divider-triple-gem-sm" /><span className="menu-divider-line menu-divider-line-end" /></div><span className="menu-divider-triple-shadow" /></div>
	</>
);

export default Dividers;