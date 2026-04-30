import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("__ANIMA_DBG__ ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: "monospace", background: "#fff1f2", minHeight: "100vh" }}>
          <h2 style={{ color: "#be123c" }}>⚠ Gabim gjatë renderimit</h2>
          <pre style={{ whiteSpace: "pre-wrap", color: "#7f1d1d", fontSize: 13 }}>
            {this.state.error?.message}
            {"\n\n"}
            {this.state.error?.stack}
          </pre>
          <p style={{ marginTop: 20, color: "#555" }}>
            Shiko konsolën e browser-it (F12 → Console) për detaje të plota.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
