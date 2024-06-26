import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from googleapiclient.discovery import build

# Set up Spotify client
spotify_client_id = '40cb55a60a0c4760a461254c90b672b3'
spotify_client_secret = '98ef58b72c9445f2b5830b932c13cb60'
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=spotify_client_id, client_secret=spotify_client_secret))

# Set up YouTube client
youtube_api_key = 'AIzaSyBWIyl6ORXP38kH0jZ0Z7uldcBxGtWzH3o'
youtube = build('youtube', 'v3', developerKey=youtube_api_key)

def spotify_to_youtube(spotify_link):
    # Extract track ID from Spotify link
    track_id = spotify_link.split('/')[-1].split('?')[0]

    # Get track information from Spotify
    track_info = sp.track(track_id)
    track_name = track_info['name']
    artist_name = track_info['artists'][0]['name']

    # Search for video on YouTube
    search_query = track_name + ' ' + artist_name + ' official music video'
    search_response = youtube.search().list(q=search_query, part='id', type='video').execute()
    
    # Get YouTube video ID
    youtube_video_id = search_response['items'][0]['id']['videoId']
    
    # Construct YouTube link
    youtube_link = 'https://www.youtube.com/watch?v=' + youtube_video_id
    
    return youtube_link

# Example usage
spotify_link = 'https://open.spotify.com/album/6j4QpObdnZpxNU52o2egBZ'
youtube_link = spotify_to_youtube(spotify_link)
print("YouTube link:", youtube_link)
