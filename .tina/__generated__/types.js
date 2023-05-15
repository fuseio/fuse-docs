export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const DocPartsFragmentDoc = gql`
    fragment DocParts on Doc {
  title
  description
  tags
  body
}
    `;
export const DropdownsPartsFragmentDoc = gql`
    fragment DropdownsParts on Dropdowns {
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
const generateRequester = (client) => {
  const requester = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(createClient({ url: "https://content.tinajs.io/1.4/content/97ce1e15-5c4d-4c87-8d64-8ca62a3b514f/github/feat/tina-cms", queries }))
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
