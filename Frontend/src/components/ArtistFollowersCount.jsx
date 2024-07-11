import { Skeleton } from "@mui/material";
import "../assets/styles/ArtistFollowerCount.css" 
import { format } from "indian-number-format";
export function ArtistFollowersCount(props) {
    return (
        <>
            <h4 id="artist-followers-count">{`Followers: ${format(props.count)}`} &nbsp;<i className="fa-solid fa-arrow-trend-up" id="trend-icon"></i>{`Trend-Score: ${props.trendScore}/100`}</h4>
        </>
    );
}
export  function ArtistFollowersCountLoad() {
    return (
        <>
            <h1 style={{display:"flex"}}><Skeleton width='15rem' sx={{bgcolor: 'rgba(71, 164, 211, 0.261)', marginRight:'4rem'}} animation='wave' /> <Skeleton width='15rem' sx={{bgcolor: 'rgba(71, 164, 211, 0.261)'}} /></h1>
            
        </>
    );
}