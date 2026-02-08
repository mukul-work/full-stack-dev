import { topics } from "../data/topics";
import TopicCard from "../components/TopicCard";

export default function Home(){
    return(
        <section className="topics">
            {topics.map((topic, index) => (
                <TopicCard 
                    key = {index}
                    title = {topic.title}
                    description={topic.description}
                />
            ))}
        </section>
    );
}