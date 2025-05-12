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
@Table(name="offers")
public class Offers {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="offer_id")
	private int offer_id;
	
	@Column(name="investor_name",length=30,nullable=false)
	private String investorname;
	@Column(name="fundingAmt",precision = 2)
	private double fundingAmt;
	@Column(name="equityReq",precision = 2)
	private double equityReq;
	@Enumerated(EnumType.STRING)
	@Column(name="status",nullable=false)
	private Status status;
	@Column(name="addTerms",length=100)
	private String additionalTerms;
	
	
	@ManyToOne
	@JoinColumn(name="pitch_id")
	private Pitches pitch;
	
	
	public enum Status {
		PENDING, ACCEPTED, REJECTED
	}
	
	public Offers() {
		this.offer_id = 0;
		this.fundingAmt = 0.0;
		this.equityReq = 0.0;
		this.status = null;
		this.additionalTerms = null;
		this.pitch = null;
		this.investorname = null;
	}
	
	public Offers(double fundingAmt, double equityReq, Status status, String additionalTerms,
			Pitches pitch, String investor) {
		this.fundingAmt = fundingAmt;
		this.equityReq = equityReq;
		this.status = status;
		this.additionalTerms = additionalTerms;
		this.pitch = pitch;
		this.investorname = investor;
	}

	public int getOffer_id() {
		return offer_id;
	}

	public void setOffer_id(int offer_id) {
		this.offer_id = offer_id;
	}

	public double getFundingAmt() {
		return fundingAmt;
	}

	public void setFundingAmt(double fundingAmt) {
		this.fundingAmt = fundingAmt;
	}

	public double getEquityReq() {
		return equityReq;
	}

	public void setEquityReq(double equityReq) {
		this.equityReq = equityReq;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public String getAdditionalTerms() {
		return additionalTerms;
	}

	public void setAdditionalTerms(String additionalTerms) {
		this.additionalTerms = additionalTerms;
	}

	public Pitches getPitch() {
		return pitch;
	}

	public void setPitch(Pitches pitch) {
		this.pitch = pitch;
	}

	public String getInvestorname() {
		return investorname;
	}

	public void setInvestorname(String investorname) {
		this.investorname = investorname;
	}

	@Override
	public String toString() {
		return "Offers [offer_id=" + offer_id + ", investorname=" + investorname + ", fundingAmt=" + fundingAmt
				+ ", equityReq=" + equityReq + ", status=" + status + ", additionalTerms=" + additionalTerms
				+ ", pitch=" + pitch + "]";
	}
	
}
