    package com.reactLogin.login.model;


    import com.fasterxml.jackson.annotation.JsonIgnore;
    import lombok.*;

    import javax.persistence.*;
    import java.util.ArrayList;
    import java.util.List;

    @Entity
    @Builder
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Profile {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        private String handle;
        private String company;
        private String website;
        private String location;
        private String status;
        private String skills;
        private String githubusername;
        private String bio;
        private String twitter;
        private String facebook;
        private String linkedin;
        private String youtube;
        private String instagram;

        @OneToOne(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name="user_id", nullable = false)
        @JsonIgnore
        private User user;

        @OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER, mappedBy ="profile")
        private List<Experience> experiences = new ArrayList<>();

        @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy ="profile")
        private List<Education> educations = new ArrayList<>();

        @OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy ="profile")
        private List<Post> posts = new ArrayList<>();

    }
