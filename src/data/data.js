export const data = {
  concepts: [
    {
      id: 609646,
      semanticClass: "JD",
      isOrtho: false,
      name: "Java Developer",
      relations: [
        {
          name: "HAS_SKILL",
          concept: {
            id: 609650,
            name: "Java",
            semanticClass: "skill",
          },
        },
        {
          name: "BELONGS_TO_DISCIPLINE",
          concept: {
            id: 609655,
            name: "IT Backend",
            semanticClass: "discipline",
          },
        },
      ],
      tags: [
        {
          id: 1461,
          name: "Software Developer",
        },
      ],
    },
    {
      id: 609647,
      semanticClass: "JD",
      isOrtho: false,
      name: "Java Spring Developer",
      relations: [
        {
          name: "HAS_SKILL",
          concept: {
            id: 609654,
            name: "JEE",
            semanticClass: "skill",
          },
        },
        {
          name: "BELONGS_TO_DISCIPLINE",
          concept: {
            id: 609655,
            name: "IT Backend",
            semanticClass: "discipline",
          },
        },
      ],
      tags: [
        {
          id: 1461,
          name: "Software Developer",
        },
      ],
    },
    {
      id: 609648,
      semanticClass: "JD",
      isOrtho: false,
      name: "Javascript Developer",
      relations: [
        {
          name: "IS_CHILD_OF",
          concept: {
            id: 609649,
            name: "Frontend Developer",
            semanticClass: "JD",
          },
        },
        {
          name: "IS_PARENT_OF",
          concept: {
            id: 609659,
            name: "NodeJS Developer",
            semanticClass: "JD",
          },
        },
      ],
      tags: [
        {
          id: 1462,
          name: "UI/UX Designer",
        },
      ],
    },
    {
      id: 609649,
      semanticClass: "JD",
      isOrtho: true,
      name: "Frontend Developer",
      relations: [
        {
          name: "IS_PARENT_OF",
          concept: {
            id: 609648,
            name: "Javascript Developer",
            semanticClass: "JD",
          },
        },
      ],
      tags: [
        {
          id: 1462,
          name: "UI/UX Designer",
        },
      ],
    },
    {
      id: 609650,
      semanticClass: "skill",
      isOrtho: false,
      name: "Java",
      relations: [
        {
          name: "IS_SKILL_OF",
          concept: {
            id: 609646,
            name: "Java Developer",
            semanticClass: "JD",
          },
        },
      ],
      tags: [
        {
          id: 1461,
          name: "Software Developer",
        },
      ],
    },
    {
      id: 609652,
      semanticClass: "skill",
      isOrtho: false,
      name: "Javascript",
      relations: [
        {
          name: "IS_COURSE_OF",
          concept: {
            id: 609657,
            name: "Bachelor of UI/UX",
            semanticClass: "degree",
          },
        },
      ],
      tags: [
        {
          id: 1462,
          name: "UI/UX Designer",
        },
      ],
    },
    {
      id: 609653,
      semanticClass: "skill",
      isOrtho: false,
      name: "HTML/CSS",
      relations: [
        {
          name: "IS_COURSE_OF",
          concept: {
            id: 609657,
            name: "Bachelor of UI/UX",
            semanticClass: "degree",
          },
        },
      ],
      tags: [
        {
          id: 1462,
          name: "UI/UX Designer",
        },
      ],
    },
    {
      id: 609654,
      semanticClass: "skill",
      isOrtho: false,
      name: "JEE",
      relations: [
        {
          name: "IS_SKILL_OF",
          concept: {
            id: 609647,
            name: "Java Spring Developer",
            semanticClass: "JD",
          },
        },
      ],
      tags: [
        {
          id: 1461,
          name: "Software Developer",
        },
      ],
    },
    {
      id: 609655,
      semanticClass: "discipline",
      isOrtho: false,
      name: "IT Backend",
      relations: [
        {
          name: "IS_DISCIPLINE_OF",
          concept: {
            id: 609647,
            name: "Java Spring Developer",
            semanticClass: "JD",
          },
        },
        {
          name: "IS_DISCIPLINE_OF",
          concept: {
            id: 609646,
            name: "Java Developer",
            semanticClass: "JD",
          },
        },
      ],
      tags: [],
    },
    {
      id: 609656,
      semanticClass: "discipline",
      isOrtho: false,
      name: "IT Frontend",
      relations: [],
      tags: [],
    },
    {
      id: 609657,
      semanticClass: "degree",
      isOrtho: false,
      name: "Bachelor of UI/UX",
      relations: [
        {
          name: "HAS_COURSE",
          concept: {
            id: 609652,
            name: "Javascript",
            semanticClass: "skill",
          },
        },
        {
          name: "HAS_COURSE",
          concept: {
            id: 609653,
            name: "HTML/CSS",
            semanticClass: "skill",
          },
        },
      ],
      tags: [
        {
          id: 1462,
          name: "UI/UX Designer",
        },
      ],
    },
    {
      id: 609658,
      semanticClass: "degree",
      isOrtho: false,
      name: "Bachelor of Backend",
      relations: [],
      tags: [
        {
          id: 1461,
          name: "Software Developer",
        },
      ],
    },
    {
      id: 609659,
      semanticClass: "JD",
      isOrtho: false,
      name: "NodeJS Developer",
      relations: [
        {
          name: "IS_CHILD_OF",
          concept: {
            id: 609648,
            name: "Javascript Developer",
            semanticClass: "JD",
          },
        },
      ],
      tags: [
        {
          id: 1461,
          name: "Software Developer",
        },
      ],
    },
  ],
};
