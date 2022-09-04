import './ProjectTabs.css';
import ItemMenu from '../Atom/ProjectTabsMenu';

let itemObject = [
    {
        icon: '',
        text: 'Overview',
        href: '#',
        active: true
    },
    {
        icon: '',
        text: 'Repositories',
        href: '#',
        active: false
    },
    {
        icon: '',
        text: 'Projects',
        href: '#',
        active: false
    },
    {
        icon: '',
        text: 'Package',
        href: '#',
        active: false
    },
    {
        icon: '',
        text: 'Stars',
        href: '#',
        active: false
    },
]

function ProjectTabs() {
    return (
        <section className="menu-list">
            <ul className="menu">
            {
                itemObject.map((item, index) => {
                    return <ItemMenu key={index} icon={item.icon} text={item.text} href={item.href} active={item.active}/>
                })
            }
            </ul>
        </section>
    );
}

export default ProjectTabs;