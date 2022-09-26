

// Importing package module to code fragment
package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

// Importing required classes
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// Annotations
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "cropdetail")

// Class
public class CropDetail extends BaseEntity
{
	@Column(unique=true,nullable=false)
	private String cropName;
	private String cropType;
	@Column(columnDefinition = "TEXT" ,nullable=false)
	private String cropInfo;
	@Column(columnDefinition = "TEXT" ,nullable=false)
	private String plantationInfo;
	@Column(columnDefinition = "TEXT" ,nullable=false)
	private String phase1;
	//private String fert1;
	@Column(columnDefinition = "TEXT" ,nullable=false)
	private String phase2;
	//private String fert2;
	@Column(columnDefinition = "TEXT" ,nullable=false)
	private String phase3;
	//private String fert3;
	@Column(columnDefinition = "TEXT" ,nullable=false)
	private String phase4;
	//private String fert4;
	
}
