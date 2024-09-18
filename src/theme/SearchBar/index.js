import React from 'react';
import { DocSearch } from '@docsearch/react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@docsearch/css';
import './SearchBar.css';

export default function SearchBar() {
  const { siteConfig } = useDocusaurusContext();
  const { algolia } = useThemeConfig();

  return (
    <div className="container">
      <DocSearch
        appId={algolia.appId}
        apiKey={algolia.apiKey}
        indexName={algolia.indexName}
        placeholder="Search"
      />
    </div>
  );
}