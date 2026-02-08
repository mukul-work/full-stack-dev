export default function TopicCard({ title, description}){
    return(
        <article className="topic-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    );
}