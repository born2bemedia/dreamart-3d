'use client';

import { useRef } from 'react';

import type { FileWithPath } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { BucketIcon } from '@/shared/ui/icons/bucket';

import { FileIcon } from '../../icons/file';
import st from './Dropzone.module.scss';

export const Dropdzone = ({
  required,
  name,
  onDrop,
  value,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (files: FileWithPath[] | null) => void;
  value?: FileWithPath[] | null;
}) => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: true,
    onDrop: (incomingFiles: FileWithPath[]) => {
      if (onDrop) {
        onDrop(incomingFiles.length ? incomingFiles : null);
      }
    },
  });

  const files: readonly FileWithPath[] = value ?? [];

  return (
    <div className={st.container}>
      <div {...getRootProps({ className: 'dropzone' })} className={st.inner}>
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <button
          className={st.chooseFile}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
        >
          <p className={st.placeholder}>Accepts images, PDFs, and docs</p>
        </button>
      </div>
      <div className={st.filesList}>
        {files.map((file) => (
          <AcceptedFile
            key={file.name}
            fileName={file.name}
            size={`${(file.size / 1024).toFixed(2)} KB`}
            onDelete={() => {
              const updatedFiles = files.filter((f) => f !== file);
              if (onDrop) onDrop(updatedFiles.length ? updatedFiles : null);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const AcceptedFile = ({
  fileName,
  onDelete,
  size,
}: {
  fileName: string;
  size: string;
  onDelete: () => void;
}) => {
  return (
    <section className={st.acceptedFile}>
      <div className={st.fileInfo}>
        <FileIcon />
        <div className={st.fileInfoText}>
          <p className={st.fileName}>{fileName}</p>
          <p className={st.size}>{size}</p>
        </div>
      </div>
      <button type="button" onClick={onDelete}>
        <BucketIcon />
      </button>
    </section>
  );
};
