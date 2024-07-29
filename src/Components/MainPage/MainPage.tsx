import { useTypedSelector } from "../../Hooks/useTypedSelector";
import "./MainPage.scss"

const MainPage = () => {
    const films = useTypedSelector((state) => state.main);

    return <div className="mainPage">
        {films.map(items => <div className="mainPage__sites" key={items.id}>
            <img src={items.image} alt="Фото сайта" className="mainPage__sites__image" />
            <div className="mainPage__sites__name">{items.name}</div>
            <div className="mainPage__sites__description">
                {items.description.map((desc, index) => <div key={index} className="mainPage__sites__description__item">
                    {desc}
                </div>)}
            </div>
            <div className="mainPage__sites__price">{items.price}</div>
        </div>)}
    </div>
}

export default MainPage;