import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from googleapiclient.discovery import build
from pytube import YouTube

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

def convert_youtube_to_audio(youtube_link):
    yt = YouTube(youtube_link)
    audio_stream = yt.streams.filter(only_audio=True).first()
    audio_url = audio_stream.url
    return audio_url

def main():
    spotify_link = input("Enter the Spotify track link: ")
    youtube_link = spotify_to_youtube(spotify_link)
    audio_url = convert_youtube_to_audio(youtube_link)
    print("Audio URL:", audio_url)

if __name__ == "__main__":
    main()
