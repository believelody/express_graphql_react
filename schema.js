const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

//  Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  })
});

//  Rocket Tyoe
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

//  Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: new GraphQLList
  }
});
