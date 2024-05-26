import { DefaultActivityCard } from "../homepage_components/DefaultActivityCard";

export function ResultSwiperCard(){
    return(
        <div className="border-2 border-bg-main  justify-between bg-white flex items-center rounded-lg p-3">
            <DefaultActivityCard />
        </div>
    );
}