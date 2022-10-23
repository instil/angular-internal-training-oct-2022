interface ExchangeRate {
  name: string;
  rate: number;
}

class Report {
  save(): void {
  }
}

function disableUI(): void {
}

function enableUI(): void {
}


function synchronous() {
  const exchangeRateReader = {
    read(): ExchangeRate[] {
      return [];
    }
  };
  const reportBuilder = {
    build(rates: ExchangeRate[]): Report {
      return new Report();
    }
  };
  const reportSaver = {
    save(report: Report): void {
    }
  };

  function algorithm() {
    disableUI();
    const exchangeRates = exchangeRateReader.read();
    const report = reportBuilder.build(exchangeRates);
    reportSaver.save(report);
    enableUI();
  }
}

function asynchronousCallback() {
  const exchangeRateReader = {
    read(): void {
    },
    onread: null as ((rates: ExchangeRate[]) => void) | null
  };
  const reportBuilder = {
    build(rates: ExchangeRate[]): void {
    },
    onbuild: null as ((report: Report) => void) | null
  };
  const reportSaver = {
    save(report: Report): void {
    },
    onsave: null as (() => void) | null
  };

  function algorithm() {
    disableUI();
    exchangeRateReader.onread = exchangeRates => {
      reportBuilder.onbuild = report => {
        reportSaver.onsave = () => {
          enableUI();
        };
        reportSaver.save(report);
      };
      reportBuilder.build(exchangeRates);
    };
    exchangeRateReader.read();
  }
}

function asynchronousCallback2() {
  const exchangeRateReader = {
    read(): void {
    },
    onread: null as ((rates: ExchangeRate[]) => void) | null
  };
  const reportBuilder = {
    build(rates: ExchangeRate[]): void {
    },
    onbuild: null as ((report: Report) => void) | null
  };
  const reportSaver = {
    save(report: Report): void {
    },
    onsave: null as (() => void) | null
  };

  function algorithm() {
    disableUI();
    exchangeRateReader.read();

    exchangeRateReader.onread = exchangeRates => {
      reportBuilder.build(exchangeRates);
    };

    reportBuilder.onbuild = report => {
      reportSaver.save(report);
    };

    reportSaver.onsave = () => {
      enableUI();
    };
  }
}

function asynchronousPromise() {
  const exchangeRateReader = {
    read(): Promise<ExchangeRate[]> {
      return Promise.resolve([]);
    }
  };
  const reportBuilder = {
    build(rates: ExchangeRate[]): Promise<Report> {
      return Promise.resolve(new Report());
    }
  };
  const reportSaver = {
    save(report: Report): Promise<void> {
      return Promise.resolve();
    }
  };

  function algorithm() {
    disableUI();
    exchangeRateReader.read()
      .then(exchangeRates => reportBuilder.build(exchangeRates))
      .then(report => reportSaver.save(report))
      .then(enableUI);
  }
}

function asynchronousAsyncAwait() {
  const exchangeRateReader = {
    read(): Promise<ExchangeRate[]> {
      return Promise.resolve([]);
    }
  };
  const reportBuilder = {
    build(rates: ExchangeRate[]): Promise<Report> {
      return Promise.resolve(new Report());
    }
  };
  const reportSaver = {
    save(report: Report): Promise<void> {
      return Promise.resolve();
    }
  };

  async function algorithm() {
    disableUI();
    const exchangeRates = await exchangeRateReader.read();
    const report = await reportBuilder.build(exchangeRates);
    await reportSaver.save(report);
    enableUI();
  }
}

