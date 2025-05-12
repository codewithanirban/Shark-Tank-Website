package com.code.st.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="pitches")
public class Pitches {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pitch_id")
	private int pitch_id;
	
	@Column(name="title",length=50,nullable=false)
	private String title;
	
	@Column(name="description",length=100,nullable=false)
	private String description;
	
	@Column(name="videoURL",length=200,nullable=false)
	private String videoURL;
	
	@Column(name="funding",precision = 2)
	private double funding;
	
	@Column(name="equityOffered",precision = 2)
	private double equityOffered;
	
	@Enumerated(EnumType.STRING)
	@Column(name="status")
	private pitchStatus status;
	
	/*private String status; (Open, closed , funded) */
	
	@ManyToOne
	@JoinColumn(name="entreprenur_id")
	private Users user_id;
	
	public enum pitchStatus {
        OPEN, CLOSED, FUNDED
    }
	
	public Pitches() {
		this.pitch_id=0;
		this.title = null;
		this.description = null;
		this.funding = 0.0;
		this.equityOffered = 0.0;
		this.videoURL = null;
		this.user_id = null;
		this.status=null;
	}

	public Pitches(String title, String desc, double funding, double equityOffered, pitchStatus status, String videoURL,
			Users user_id) {
		this.title = title;
		this.description = desc;
		this.funding = funding;
		this.equityOffered = equityOffered;
		this.status = status;
		this.videoURL = videoURL;
		this.user_id = user_id;
	}

	public int getPitch_id() {
		return pitch_id;
	}

	public void setPitch_id(int pitch_id) {
		this.pitch_id = pitch_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getFunding() {
		return funding;
	}

	public void setFunding(double funding) {
		this.funding = funding;
	}

	public double getEquityOffered() {
		return equityOffered;
	}

	public void setEquityOffered(double equityOffered) {
		this.equityOffered = equityOffered;
	}

	public pitchStatus getStatus() {
		return status;
	}

	public void setStatus(pitchStatus status) {
		this.status = status;
	}

	public String getVideoURL() {
		return videoURL;
	}

	public void setVideoURL(String videoURL) {
		this.videoURL = videoURL;
	}


	@Override
	public String toString() {
		return "Pitches [pitch_id=" + pitch_id + ", title=" + title + ", description=" + description + ", funding="
				+ funding + ", equityOffered=" + equityOffered + ", status=" + status + ", videoURL=" + videoURL
				+ "]";
	}
	
}
