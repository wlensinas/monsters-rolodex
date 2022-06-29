import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((m) => {
            return <Card monster={m} key={m.id} />;
        })}
    </div >
);
        



export default CardList;