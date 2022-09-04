import './Organisation.css';
import OrganisationItem from '../Atom/OrganisationItem';

let organisationData = [
    {
      profilePict: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
      name: 'Kompetegram',
      href: 'instagram.com/abd_maf'
    },
    {
      profilePict: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
      name: 'Kucingram',
      href: 'instagram.com/abid.naf'
    },
    {
      profilePict: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
      name: 'Kucingram',
      href: 'instagram.com/abid.naf'
    },
  ]

const Organisation = () => {
    return (
        <section className="container-organisation">
            <h3 className="heading-organisation">Organisation</h3>
            <div className="organisation-list">
            {
                organisationData.map((item, index) => {
                return <OrganisationItem
                    profilePict={item.profilePict}
                    name={item.name}
                    href={item.href}
                    />
                })
            }
            </div>
        </section>

    )
}

export default Organisation;