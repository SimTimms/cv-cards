import gql from 'graphql-tag';

const MY_SKILLS = gql`
  query MySkills {
    mySkills {
      name
      level
      firstUsed
      lastUsed
      description
    }
  }
`;

const UPDATE_SKILLS = gql`
  mutation updateSkills(
    $name: String
    $level: Int
    $firstUsed: Date
    $lastUsed: Date
    $description: String
  ) {
    updateSkills(
      name: $name
      level: $level
      firstUsed: $firstUsed
      lastUsed: $lastUsed
      description: $description
    ) {
      name
      level
      firstUsed
      lastUsed
      description
    }
  }
`;

const MY_PROFILE = gql`
  query MyProfile($userId: MongoID!) {
    myProfile(userId: $userId) {
      skills {
        name
        level
        lastUsed
        firstUsed
        description
      }
    }
  }
`;

export { MY_SKILLS, UPDATE_SKILLS, MY_PROFILE };
