import "../assets/styles/ArtistMainInfo.css"
import { ArtistFollowersCount, ArtistFollowersCountLoad } from "./ArtistFollowersCount";
import { ArtistProfilePic, ArtistProfilePicLoad } from "../components/ArtistProfilePic.jsx"
import { FollowBtn, FollowBtnLoad } from '../components/FollowBtn.jsx'
import { Skeleton } from "@mui/material";


export function ArtistMainInfo({
    artistName,
    followers,
    trendScore,
    img
}) {
    return (
        <div className="mainInfo">
            <div className="name-stat">
                <p id="artist-name">{artistName}</p>
                <ArtistFollowersCount count={followers} trendScore={trendScore} />
                <FollowBtn />
            </div>
            <ArtistProfilePic imgSrc={img} />
        </div>
    );
}

export function ArtistMainInfoLoad() {
    return (
        <div className="mainInfo">
            <div className="name-stat">
                <p><Skeleton sx={{ bgcolor: 'rgba(71, 164, 211, 0.261)', fontSize: '5rem' }} /></p>
                <ArtistFollowersCountLoad />
                <FollowBtnLoad />
            </div>
            <ArtistProfilePicLoad />
        </div>
    );
}
