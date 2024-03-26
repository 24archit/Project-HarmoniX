import librosa
import librosa.display
import numpy as np
from midiutil import MIDIFile
import matplotlib.pyplot as plt

def audio_to_midi(audio_path, output_midi_path):
    # Load audio file
    y, sr = librosa.load(audio_path)

    # Compute spectrogram
    D = librosa.amplitude_to_db(librosa.stft(y), ref=np.max)

    # Extract pitches and times
    pitches, magnitudes = librosa.core.piptrack(y=y, sr=sr)
    times = librosa.times_like(pitches)

    
    # Convert frequencies to notes, handling zero or negative frequencies
    notes = [librosa.core.hz_to_note(pitch[0]) if pitch[0] > 0 else 'C-1' for pitch in pitches.T]


    # Create MIDI file
    midi = MIDIFile(1)  # One track
    midi.addTempo(0, 0, 120)  # Tempo

    # Add notes to MIDI
    for time, note in zip(times, notes):
        if note != 'C-1':  # Exclude silent notes
            midi.addNote(0, 0, librosa.note_to_midi(note), time, 1, 100)  # channel, pitch, time, duration, volume

    # Write MIDI file
    with open(output_midi_path, "wb") as midi_file:
        midi.writeFile(midi_file)

    # Display the spectrogram
    librosa.display.specshow(D, sr=sr, x_axis='time', y_axis='log')
    plt.colorbar(format='%+2.0f dB')
    plt.title('Spectrogram')
    plt.show()

# Example usage
audio_file_path = r"C:\Users\Akshya\Videos\Captures\Tum_Hi_Ho_Piano_Cover-[AudioTrimmer.com].mp3"
output_midi_file_path = r"C:\Users\Akshya\Videos\Captures\output.mid"
audio_to_midi(audio_file_path, output_midi_file_path)
