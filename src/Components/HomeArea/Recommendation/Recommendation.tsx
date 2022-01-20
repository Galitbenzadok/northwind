import { SyntheticEvent } from "react";
import "./Recommendation.css";

function Recommendation(): JSX.Element {

    const item1 = "Ice cream";
    const item2 = "Cake";
    const item3 = "Chocolate";

    function recommend1 (): void {
        alert (item1);
    }
     function recommend2 (args: SyntheticEvent): void {
        console.log(args.target)
        alert (item2);
    }
     function recommend3 (item: string): void {
        alert (item3);
    }

    return (
        <div className="Recommendation box">
			<p>
                <button onClick={recommend1}>Recommend1</button>
                <button onClick={recommend2}>Recommend2</button>
                <button onClick={() =>recommend3(item2)}>Recommend3</button>


            </p>

        </div>
    );
}

export default Recommendation;
