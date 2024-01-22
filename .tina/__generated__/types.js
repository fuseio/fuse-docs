export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const DocPartsFragmentDoc = gql`
    fragment DocParts on Doc {
  __typename
  title
  description
  sidebar_position
  tags
  body
}
    `;
export const DropdownsPartsFragmentDoc = gql`
    fragment DropdownsParts on Dropdowns {
  __typename
  label
  position
}
    `;
export const DocDocument = gql`
    query doc($relativePath: String!) {
  doc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocParts
  }
}
    ${DocPartsFragmentDoc}`;
export const DocConnectionDocument = gql`
    query docConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocFilter) {
  docConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocParts
      }
    }
  }
}
    ${DocPartsFragmentDoc}`;
export const DropdownsDocument = gql`
    query dropdowns($relativePath: String!) {
  dropdowns(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DropdownsParts
  }
}
    ${DropdownsPartsFragmentDoc}`;
export const DropdownsConnectionDocument = gql`
    query dropdownsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DropdownsFilter) {
  dropdownsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DropdownsParts
      }
    }
  }
}
    ${DropdownsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    doc(variables, options) {
      return requester(DocDocument, variables, options);
    },
    docConnection(variables, options) {
      return requester(DocConnectionDocument, variables, options);
    },
    dropdowns(variables, options) {
      return requester(DropdownsDocument, variables, options);
    },
    dropdownsConnection(variables, options) {
      return requester(DropdownsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client, options) => {
  const requester = async (doc, vars, options2) => {
    let url = client.apiUrl;
    if (options2?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options2.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    });
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client, options) => {
  const requester = generateRequester(client, options);
  return getSdk(requester);
};
