type DividersProps = { icon: string };

const Dividers = ({ icon }: DividersProps) => (
	<div className="menu-divider-badge" aria-hidden="true"><span className="menu-divider-line menu-divider-line-start" /><span className="menu-divider-badge-gem" /><span className="menu-divider-badge-circle"><img src={icon} alt="" className="h-5 w-5 object-contain" /></span><span className="menu-divider-badge-gem" /><span className="menu-divider-line menu-divider-line-end" /></div>
);

export default Dividers;
