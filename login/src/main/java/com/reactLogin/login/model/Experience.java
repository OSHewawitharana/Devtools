package com.reactLogin.login.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String company;
    private String title;
    private String location;
    @Column(name="startDate")
    private String from;
    @Column(name="endDate")
    private String to;
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="profile_id", nullable = false)
    @Getter(onMethod = @__( @JsonIgnore))
    @Setter
    private Profile profile;

}
