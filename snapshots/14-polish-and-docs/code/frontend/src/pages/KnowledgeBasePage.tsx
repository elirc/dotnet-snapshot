import { api } from '../app/api';
import { useApiResource } from '../app/useApiResource';
import { PageScaffold } from './PageScaffold';

export function KnowledgeBasePage() {
  const documents = useApiResource('knowledge:list', api.listKnowledgeDocuments);
  return (
    <PageScaffold title="Knowledge Base">
      {documents.isLoading ? <p>Loading documents...</p> : (
        <ul className="resource-list">
          {(documents.data ?? []).map((doc) => <li key={doc.id}><strong>{doc.title}</strong><span>{doc.serviceName}</span></li>)}
        </ul>
      )}
    </PageScaffold>
  );
}
