import app from '../data/app.json'

export function Header() {
    return(
        <header className="">
        'Hi i'm the header'
        <nav>
            <ul>
            {app.navigation.map((item, index) => {
                return(
                    <li key={`${item.slug}${index}`}>
                        <a href={item.slug}>{item.title}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
      </header>
    )
}